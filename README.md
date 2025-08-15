# IOE Past Year Questions - Enhanced Interface

A modern, responsive web application providing easy access to IOE (Institute of Engineering) past year question papers with an improved user experience.

## 🎯 Overview

This project provides an enhanced user interface for browsing IOE past year question papers, originally sourced from Digital NCE Library. The application organizes questions by semesters (1st through 8th) with a clean, student-friendly design optimized for all devices.

## ✨ Features

- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🗂️ Semester Organization**: Easy navigation through all 8 semesters
- **🎨 Modern UI**: Clean, professional interface with smooth animations
- **🔍 Easy Navigation**: Intuitive semester tabs and subject cards
- **📊 Statistics**: Overview of available question papers
- **⚡ Fast Loading**: Optimized performance with Next.js
- **♿ Accessible**: ARIA labels and keyboard navigation support
- **🔗 Direct Links**: One-click access to Google Drive question papers

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ioe-questions-ui.git
   cd ioe-questions-ui
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add question data**

   - Place your scraped `IOE_Past_Year_Questions.json` file in the `data/` directory
   - Or update the data import path in your components

4. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗂️ Data Structure

The application expects question data in the following JSON format:

```json
{
  "1st_Semester": [
    {
      "text": "Computer Programming (New Course)",
      "link": "https://drive.google.com/file/d/1MTMfivZU4LAdhVE2kn2YMCJMRhr9PBKv/view?usp=sharing"
    }
  ],
  "2nd_Semester": [...],
  // ... up to 8th_Semester
}
```

## 🕷️ Data Scraping

The project includes a Node.js scraper to collect question data:

1. **Install scraper dependencies**

   ```bash
   cd scraper
   npm install axios cheerio
   ```

2. **Run scraper**

   ```bash
   node scrape-ioe.js
   ```

3. **Move generated JSON**
   ```bash
   mv IOE_Past_Year_Questions.json ../data/
   ```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Deploy automatically on push**

### Other Platforms

- **Netlify**: Use `npm run build && npm run export`
- **AWS/DigitalOcean**: Use Docker with `npm run build && npm start`

## 🎨 Customization

### Styling

- Modify `tailwind.config.js` for custom colors/themes
- Update `globals.css` for global styles
- Customize component styles in individual files

### Data Source

- Update scraper URLs in `scraper/scrape-ioe.js`
- Modify data processing logic in `utils/data.ts`
- Add new semester support by updating interfaces

### Features

- Add search functionality
- Implement filtering by subject type
- Add bookmark/favorites feature
- Include download progress tracking

## 📄 Attribution & Legal

### Content Source

All IOE past year question papers are originally sourced from **Digital NCE Library** (https://digitalnce.com). This project provides an enhanced user interface for better accessibility to these educational resources.

### Rights & Disclaimer

- All intellectual property rights remain with Digital NCE Library
- This is a UI enhancement project, not content creation
- Content is publicly available educational material
- For content-related queries, contact Digital NCE Library directly

### Project License

This UI implementation is open source under the MIT License. See `LICENSE` file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Contribution Guidelines

- Follow existing code style and conventions
- Add TypeScript types for new features
- Test responsiveness on multiple devices
- Update documentation for significant changes
- Respect attribution requirements

## 🐛 Bug Reports & Feature Requests

Please use GitHub Issues to report bugs or request features:

- **Bug Report**: Include steps to reproduce, expected behavior, screenshots
- **Feature Request**: Describe the feature and its benefits for students
- **UI/UX**: Provide mockups or detailed descriptions

## 🙋‍♂️ Support

- **Documentation**: Check this README and code comments
- **Issues**: Use GitHub Issues for bug reports
- **Questions**: Open a discussion in GitHub Discussions
- **Original Content**: Contact Digital NCE Library for content queries

## 📊 Project Stats

- **Semesters Covered**: 8 (1st through 8th)
- **Engineering Branches**: Electronics, Computer, Civil
- **Responsive Breakpoints**: Mobile, Tablet, Desktop
- **Performance**: Lighthouse Score 95+ (aim)

## 🔮 Roadmap

- [ ] Search functionality across all subjects
- [ ] Advanced filtering (by year, subject type)
- [ ] Dark mode support
- [ ] Offline support with service worker
- [ ] PDF viewer integration
- [ ] Study progress tracking
- [ ] Mobile app version

## 📜 Changelog

### v1.0.0 (Current)

- Initial release with all 8 semesters
- Responsive design implementation
- Digital NCE Library integration
- Modern UI with Tailwind CSS
- Attribution and legal compliance

**Made with ❤️ for IOE students** | **Content courtesy of Digital NCE Library**
