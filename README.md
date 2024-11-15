# StatusWatch

<div align="center">

[![English](https://img.shields.io/badge/lang-English-blue.svg)](README.md)
[![한국어](https://img.shields.io/badge/lang-한국어-red.svg)](README_KR.md)

<br>

<img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/activity.svg" width="120" alt="StatusWatch Logo" />

<h1>StatusWatch</h1>

<p align="center">
  <strong>Real-time Website Monitoring Dashboard</strong>
  <br>
  <span>Monitor your websites' uptime, response time, and SSL certificate status with ease.</span>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#preview">Preview</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#usage">Usage</a>
</p>

[![GitHub license](https://img.shields.io/github/license/yourusername/statuswatch)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/statuswatch)](https://github.com/yourusername/statuswatch/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/statuswatch)](https://github.com/yourusername/statuswatch/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/statuswatch)](https://github.com/yourusername/statuswatch/pulls)

</div>

## ✨ Features

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/activity.svg" width="40" alt="Monitoring Icon"/><br>
        <b>Real-time Monitoring</b>
        <br>
        • 30-second checks<br>
        • Response tracking<br>
        • Uptime calculation
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/shield-check.svg" width="40" alt="SSL Icon"/><br>
        <b>SSL Certificate Monitoring</b>
        <br>
        • Certificate info<br>
        • Expiration alerts<br>
        • Issuer verification
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/line-chart.svg" width="40" alt="Analytics Icon"/><br>
        <b>Performance Analytics</b>
        <br>
        • Response graphs<br>
        • Historical data<br>
        • Uptime statistics
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/bell.svg" width="40" alt="Alerts Icon"/><br>
        <b>Status Alerts</b>
        <br>
        • Visual indicators<br>
        • Performance alerts<br>
        • Downtime tracking
      </td>
    </tr>
  </table>
</div>

## 🖼️ Preview

<div align="center">
  <img src="https://github.com/user-attachments/assets/40e4e5ca-bbd0-4c6b-8a51-049df3154680" alt="StatusWatch Dashboard" width="100%"/>
</div>

## 🛠️ Tech Stack

<div align="center">

[![React](https://img.shields.io/badge/React_18-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Recharts](https://img.shields.io/badge/Recharts-%23FF6384.svg?style=for-the-badge)](https://recharts.org/)

</div>

## 🚀 Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/statuswatch.git
```

2. **Install dependencies:**
```bash
cd statuswatch
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Build for production:**
```bash
npm run build
```

## 📖 Usage

<div align="center">
  <table>
    <tr>
      <td align="center" width="25%">
        <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/plus-circle.svg" width="30"/><br>
        <b>1. Add Website</b><br>
        Click "Add Website" button
      </td>
      <td align="center" width="25%">
        <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/monitor.svg" width="30"/><br>
        <b>2. Monitor</b><br>
        View real-time updates
      </td>
      <td align="center" width="25%">
        <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/eye.svg" width="30"/><br>
        <b>3. View Details</b><br>
        Check in-depth info
      </td>
      <td align="center" width="25%">
        <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/shield.svg" width="30"/><br>
        <b>4. SSL Status</b><br>
        Monitor certificates
      </td>
    </tr>
  </table>
</div>

## ⚙️ Configuration

The monitoring interval is set to 30 seconds by default. You can modify this in `src/hooks/useMonitoring.ts`:

```typescript
const CHECK_INTERVAL = 30000; // 30 seconds
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://lucide.dev/"><img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/logo/logo.svg" width="40"/><br><b>Lucide Icons</b></a>
      </td>
      <td align="center">
        <a href="https://tailwindcss.com/"><img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-dark.svg" width="40"/><br><b>Tailwind CSS</b></a>
      </td>
      <td align="center">
        <a href="https://recharts.org/"><img src="https://raw.githubusercontent.com/recharts/recharts/master/logo.png" width="40"/><br><b>Recharts</b></a>
      </td>
      <td align="center">
        <a href="https://vitejs.dev/"><img src="https://vitejs.dev/logo.svg" width="40"/><br><b>Vite</b></a>
      </td>
    </tr>
  </table>
</div>

## 👨‍💻 Author

<div align="center">
  <img src="https://github.com/yourusername.png" width="100" style="border-radius: 50%"/><br>
  <b>Your Name</b><br>
  <a href="https://github.com/yourusername">@yourusername</a>
</div>

<div align="center">

## ⭐ Support

If you found this project helpful, please give it a ⭐️!

</div>
