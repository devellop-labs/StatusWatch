# StatusWatch

[![English](https://img.shields.io/badge/lang-English-blue.svg)](README.md)
[![한국어](https://img.shields.io/badge/lang-한국어-red.svg)](README_KR.md)

<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/activity.svg" width="120" alt="StatusWatch Logo" />
  <h3>Real-time Website Monitoring Dashboard</h3>
  <p>Monitor your websites' uptime, response time, and SSL certificate status with ease.</p>
</div>

## Features

- 🔍 **Real-time Monitoring**
  - Automatic checks every 30 seconds
  - Response time tracking
  - Uptime percentage calculation

- 🔒 **SSL Certificate Monitoring**
  - Detailed certificate information
  - Expiration alerts
  - Issuer verification
  - Full certificate details (CN, O, OU)

- 📊 **Performance Analytics**
  - Response time graphs
  - Historical data tracking
  - Uptime statistics

- 🚨 **Status Alerts**
  - Visual status indicators
  - Degraded performance detection
  - Downtime tracking

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Recharts
- Lucide Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/statuswatch.git
   ```

2. Install dependencies:
   ```bash
   cd statuswatch
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Usage

1. Add websites to monitor through the "Add Website" button
2. View real-time status updates in the dashboard
3. Click "View Details" for in-depth information about each website
4. Monitor SSL certificate status and expiration dates

## Configuration

The monitoring interval is set to 30 seconds by default. You can modify this in `src/hooks/useMonitoring.ts`:

```typescript
const CHECK_INTERVAL = 30000; // 30 seconds
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Lucide Icons](https://lucide.dev/) - Icons
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Recharts](https://recharts.org/) - Charts
- [Vite](https://vitejs.dev/) - Build tool

## Author

Your Name - [@yourusername](https://github.com/yourusername)

## Support

If you found this project helpful, please give it a ⭐️!