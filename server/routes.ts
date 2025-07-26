import type { Express } from "express";
import { createServer, type Server } from "http";
import QRCode from "qrcode";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Menu QR Code generation endpoint
  app.get("/api/menu/qr", async (req, res) => {
    try {
      const baseUrl = process.env.REPLIT_DEV_DOMAIN 
        ? `https://${process.env.REPLIT_DEV_DOMAIN}`
        : 'http://localhost:5000';
      
      const menuPdfUrl = `${baseUrl}/api/menu/pdf`;
      
      const qrCodeDataUrl = await QRCode.toDataURL(menuPdfUrl, {
        width: 200,
        margin: 2,
        color: {
          dark: '#1e3a8a', // Mediterranean blue
          light: '#ffffff'
        }
      });
      
      res.json({ qrCodeUrl: qrCodeDataUrl });
    } catch (error) {
      console.error('Error generating QR code:', error);
      res.status(500).json({ error: 'Failed to generate QR code' });
    }
  });

  // Menu PDF serving endpoint
  app.get("/api/menu/pdf", (req, res) => {
    try {
      const menuPath = path.join(process.cwd(), 'attached_assets', 'menu.pdf');
      
      if (fs.existsSync(menuPath)) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename="menu-el-sabor-del-chef.pdf"');
        res.sendFile(menuPath);
      } else {
        // Create a simple PDF content or redirect if menu PDF doesn't exist
        res.status(404).json({ error: 'Menu PDF not found' });
      }
    } catch (error) {
      console.error('Error serving menu PDF:', error);
      res.status(500).json({ error: 'Failed to serve menu PDF' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
