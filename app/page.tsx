"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Search,
  ExternalLink,
  FileText,
  Monitor,
  Zap,
  Building,
  Calculator,
  Cog,
  Atom,
  FlaskRoundIcon as Flask,
  BookOpen,
  Moon,
  Sun,
  Eye,
  X,
  Download,
  Maximize2,
} from "lucide-react";
import { questionsData } from "@/lib/data";

const getSubjectCategory = (text: string): string => {
  const lowerText = text.toLowerCase();

  if (
    lowerText.includes("computer") ||
    lowerText.includes("programming") ||
    lowerText.includes("software") ||
    lowerText.includes("data structure") ||
    lowerText.includes("algorithm") ||
    lowerText.includes("database") ||
    lowerText.includes("artificial intelligence") ||
    lowerText.includes("graphics") ||
    lowerText.includes("network") ||
    lowerText.includes("operating system") ||
    lowerText.includes("distributed") ||
    lowerText.includes("internet") ||
    lowerText.includes("web") ||
    lowerText.includes("information system") ||
    lowerText.includes("simulation")
  ) {
    return "computer";
  }

  if (
    lowerText.includes("electrical") ||
    lowerText.includes("electronics") ||
    lowerText.includes("circuit") ||
    lowerText.includes("power") ||
    lowerText.includes("machine") ||
    lowerText.includes("control") ||
    lowerText.includes("instrumentation") ||
    lowerText.includes("microprocessor") ||
    lowerText.includes("digital") ||
    lowerText.includes("signal") ||
    lowerText.includes("communication") ||
    lowerText.includes("antenna") ||
    lowerText.includes("wireless") ||
    lowerText.includes("rf") ||
    lowerText.includes("microwave") ||
    lowerText.includes("filter") ||
    lowerText.includes("transmission") ||
    lowerText.includes("distribution") ||
    lowerText.includes("switchgear") ||
    lowerText.includes("high voltage") ||
    lowerText.includes("hydropower")
  ) {
    return "electronics";
  }

  if (
    lowerText.includes("civil") ||
    lowerText.includes("structural") ||
    lowerText.includes("concrete") ||
    lowerText.includes("building") ||
    lowerText.includes("construction") ||
    lowerText.includes("survey") ||
    lowerText.includes("geology") ||
    lowerText.includes("soil") ||
    lowerText.includes("foundation") ||
    lowerText.includes("hydraulics") ||
    lowerText.includes("hydrology") ||
    lowerText.includes("transportation") ||
    lowerText.includes("sanitary") ||
    lowerText.includes("irrigation") ||
    lowerText.includes("drainage") ||
    lowerText.includes("steel") ||
    lowerText.includes("timber") ||
    lowerText.includes("rcc") ||
    lowerText.includes("fluid mechanics") ||
    lowerText.includes("strength of material") ||
    lowerText.includes("drawing")
  ) {
    return "civil";
  }

  if (
    lowerText.includes("mathematics") ||
    lowerText.includes("numerical") ||
    lowerText.includes("statistics") ||
    lowerText.includes("probability") ||
    lowerText.includes("discrete") ||
    lowerText.includes("computation")
  ) {
    return "mathematics";
  }

  if (
    lowerText.includes("thermodynamics") ||
    lowerText.includes("heat") ||
    lowerText.includes("mechanics") ||
    lowerText.includes("dynamics") ||
    lowerText.includes("workshop")
  ) {
    return "mechanical";
  }

  if (lowerText.includes("physics") || lowerText.includes("electromagnetics")) {
    return "physics";
  }

  if (lowerText.includes("chemistry")) {
    return "chemistry";
  }

  if (
    lowerText.includes("english") ||
    lowerText.includes("management") ||
    lowerText.includes("economics") ||
    lowerText.includes("professional") ||
    lowerText.includes("environment") ||
    lowerText.includes("society") ||
    lowerText.includes("organization") ||
    lowerText.includes("project")
  ) {
    return "general";
  }

  return "general";
};

const getSubjectIcon = (category: string) => {
  switch (category) {
    case "computer":
      return <Monitor className="h-5 w-5 text-blue-600" />;
    case "electronics":
      return <Zap className="h-5 w-5 text-yellow-600" />;
    case "civil":
      return <Building className="h-5 w-5 text-gray-600" />;
    case "mathematics":
      return <Calculator className="h-5 w-5 text-green-600" />;
    case "mechanical":
      return <Cog className="h-5 w-5 text-orange-600" />;
    case "physics":
      return <Atom className="h-5 w-5 text-purple-600" />;
    case "chemistry":
      return <Flask className="h-5 w-5 text-red-600" />;
    case "general":
      return <BookOpen className="h-5 w-5 text-indigo-600" />;
    default:
      return <FileText className="h-5 w-5 text-gray-500" />;
  }
};

const getCategoryColor = (category: string, isDark: boolean) => {
  const colors = {
    computer: {
      light: {
        bgColor: "bg-blue-100",
        iconColor: "text-blue-800",
        iconBg: "bg-blue-100",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      },
      dark: {
        bgColor: "bg-blue-900/30",
        iconColor: "text-blue-300",
        iconBg: "bg-blue-900/30",
        badgeColor: "bg-blue-900/30 text-blue-300 border-blue-700",
      },
    },
    electronics: {
      light: {
        bgColor: "bg-yellow-100",
        iconColor: "text-yellow-800",
        iconBg: "bg-yellow-100",
        badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
      },
      dark: {
        bgColor: "bg-yellow-900/30",
        iconColor: "text-yellow-300",
        iconBg: "bg-yellow-900/30",
        badgeColor: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
      },
    },
    civil: {
      light: {
        bgColor: "bg-gray-100",
        iconColor: "text-gray-800",
        iconBg: "bg-gray-100",
        badgeColor: "bg-gray-100 text-gray-800 border-gray-200",
      },
      dark: {
        bgColor: "bg-gray-800/30",
        iconColor: "text-gray-300",
        iconBg: "bg-gray-800/30",
        badgeColor: "bg-gray-800/30 text-gray-300 border-gray-600",
      },
    },
    mathematics: {
      light: {
        bgColor: "bg-green-100",
        iconColor: "text-green-800",
        iconBg: "bg-green-100",
        badgeColor: "bg-green-100 text-green-800 border-green-200",
      },
      dark: {
        bgColor: "bg-green-900/30",
        iconColor: "text-green-300",
        iconBg: "bg-green-900/30",
        badgeColor: "bg-green-900/30 text-green-300 border-green-700",
      },
    },
    mechanical: {
      light: {
        bgColor: "bg-orange-100",
        iconColor: "text-orange-800",
        iconBg: "bg-orange-100",
        badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
      },
      dark: {
        bgColor: "bg-orange-900/30",
        iconColor: "text-orange-300",
        iconBg: "bg-orange-900/30",
        badgeColor: "bg-orange-900/30 text-orange-300 border-orange-700",
      },
    },
    physics: {
      light: {
        bgColor: "bg-purple-100",
        iconColor: "text-purple-800",
        iconBg: "bg-purple-100",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      },
      dark: {
        bgColor: "bg-purple-900/30",
        iconColor: "text-purple-300",
        iconBg: "bg-purple-900/30",
        badgeColor: "bg-purple-900/30 text-purple-300 border-purple-700",
      },
    },
    chemistry: {
      light: {
        bgColor: "bg-red-100",
        iconColor: "text-red-800",
        iconBg: "bg-red-100",
        badgeColor: "bg-red-100 text-red-800 border-red-200",
      },
      dark: {
        bgColor: "bg-red-900/30",
        iconColor: "text-red-300",
        iconBg: "bg-red-900/30",
        badgeColor: "bg-red-900/30 text-red-300 border-red-700",
      },
    },
    general: {
      light: {
        bgColor: "bg-indigo-100",
        iconColor: "text-indigo-800",
        iconBg: "bg-indigo-100",
        badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      },
      dark: {
        bgColor: "bg-indigo-900/30",
        iconColor: "text-indigo-300",
        iconBg: "bg-indigo-900/30",
        badgeColor: "bg-indigo-900/30 text-indigo-300 border-indigo-700",
      },
    },
  };

  const theme = isDark ? "dark" : "light";
  const categoryColors =
    colors[category as keyof typeof colors] || colors.general;

  return {
    ...categoryColors[theme],
    name: category.charAt(0).toUpperCase() + category.slice(1),
  };
};

export default function IOEQuestionsInterface() {
  const [activeSemester, setActiveSemester] = useState("1st_Semester");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [previewData, setPreviewData] = useState<{
    isOpen: boolean;
    title: string;
    url: string;
  }>({
    isOpen: false,
    title: "",
    url: "",
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const semesters = Object.keys(questionsData);

  const displayedSubjects = useMemo(() => {
    const currentSubjects =
      questionsData[activeSemester as keyof typeof questionsData] || [];

    return searchQuery
      ? Object.entries(questionsData).flatMap(([semester, subjects]) =>
          subjects
            .filter((subject) =>
              subject.text.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((subject) => ({
              ...subject,
              semester: semester.replace("_", " "),
            }))
        )
      : currentSubjects.map((subject) => ({
          ...subject,
          semester: activeSemester.replace("_", " "),
        }));
  }, [activeSemester, searchQuery]);

  const totalQuestions = Object.values(questionsData).reduce(
    (total, subjects) => total + subjects.length,
    0
  );

  const convertGoogleDriveLink = (link: string): string => {
    if (link.includes("drive.google.com/file/d/")) {
      const fileId = link.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return link;
  };

  const handleLinkClick = (link: string, title: string, preview = false) => {
    if (link !== "#") {
      if (preview) {
        setPreviewData({
          isOpen: true,
          title,
          url: convertGoogleDriveLink(link),
        });
      } else {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    }
  };

  const closePreview = () => {
    setPreviewData({
      isOpen: false,
      title: "",
      url: "",
    });
  };

  const getCategoryColors = (text: string, isDark: boolean) => {
    const category = getSubjectCategory(text);
    const colors = getCategoryColor(category, isDark);

    const icon = getSubjectIcon(category);

    return {
      ...colors,
      icon: () => icon,
      iconBg: colors.bgColor,
    };
  };
  const downloadLinkBuilder = (link: string) => {
    if (link.includes("drive.google.com/file/d/")) {
      const fileId = link.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];

      if (fileId) {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
    }

    return link;
  };

  const handleDownload = (link: string) => {
    const downloadLink = downloadLinkBuilder(link);

    window.open(downloadLink, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`border-b transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="text-left flex items-center space-x-3">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center"
              >
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </motion.div>
              <div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`text-xl sm:text-2xl font-bold mb-1 transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  IOE Past Year Questions
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`text-xs sm:text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Institute of Engineering Past Papers
                </motion.p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "border-gray-600 hover:bg-gray-700 text-gray-300"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="container mx-auto px-3 sm:px-4 lg:px-6 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full sm:max-w-md sm:mx-auto"
          >
            <div className="relative">
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}
              />
              <Input
                type="text"
                placeholder="Search subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 h-9 rounded-lg w-full transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500"
                    : "border-gray-300 focus:border-blue-500"
                } focus:ring-1 focus:ring-blue-500`}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {semesters.map((semester, index) => (
                <motion.div
                  key={semester}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.03 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={
                      activeSemester === semester ? "default" : "outline"
                    }
                    onClick={() => setActiveSemester(semester)}
                    className={`w-full h-8 sm:h-10 text-xs transition-all duration-200 ${
                      activeSemester === semester
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : isDarkMode
                        ? "hover:bg-gray-700 border-gray-600 text-gray-300"
                        : "hover:bg-gray-50 border-gray-300"
                    }`}
                  >
                    {semester.replace("_", " ")}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeSemester}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-left sm:text-center"
          >
            <h2
              className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {activeSemester.replace("_", " ")}
            </h2>
            <p
              className={`text-sm transition-colors duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {displayedSubjects.length} subject
              {displayedSubjects.length !== 1 ? "s" : ""}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </motion.div>

          {/* Subject Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence>
              {displayedSubjects.map((subject, index) => {
                const categoryColors = getCategoryColors(
                  subject.text,
                  isDarkMode
                );
                return (
                  <motion.div
                    key={`${subject.text}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="h-full"
                  >
                    <Card
                      className={`h-full transition-all duration-200 hover:shadow-md border ${
                        isDarkMode
                          ? "bg-gray-800 border-gray-700 hover:bg-gray-700/50"
                          : "bg-white border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <CardContent className="p-3 sm:p-4 h-full flex flex-col justify-between">
                        <div className="flex items-start gap-2 mb-3">
                          <div
                            className={`p-1.5 rounded-lg ${categoryColors.iconBg} flex-shrink-0`}
                          >
                            <categoryColors.icon />
                          </div>
                          <h3
                            className={`font-medium text-sm leading-tight ${
                              isDarkMode ? "text-gray-100" : "text-gray-900"
                            }`}
                          >
                            {subject.text}
                          </h3>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                          {searchQuery && (
                            <span
                              className={`text-xs px-2 py-1 rounded-md ${
                                isDarkMode
                                  ? "bg-blue-900/30 text-blue-300"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {subject.semester}
                            </span>
                          )}
                          <span
                            className={`${categoryColors.badgeColor} inline-flex items-center px-2 py-1 rounded-md text-xs flex-shrink-0`}
                          >
                            {categoryColors.name}
                          </span>
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="outline"
                              className={`px-2 py-1.5 h-7 text-xs font-medium rounded-md transition-colors flex-shrink-0 ${
                                isDarkMode
                                  ? "border-gray-600 hover:bg-gray-700 text-gray-300 hover:text-white"
                                  : "border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900"
                              }`}
                              onClick={() =>
                                handleLinkClick(
                                  subject.link,
                                  subject.text,
                                  true
                                )
                              }
                            >
                              <Eye className="h-3 w-3 mr-1" />
                              Preview
                            </Button>
                            <Button
                              size="sm"
                              className={`px-2 py-1.5 h-7 text-xs font-medium rounded-md transition-colors flex-shrink-0 ${
                                isDarkMode
                                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                                  : "bg-blue-600 hover:bg-blue-700 text-white"
                              }`}
                              onClick={() =>
                                handleLinkClick(
                                  subject.link,
                                  subject.text,
                                  false
                                )
                              }
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className={`rounded-xl p-4 border mt-6 transition-colors duration-300 ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
            }`}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-blue-600">
                  {totalQuestions}
                </div>
                <div
                  className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Papers
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-green-600">8</div>
                <div
                  className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Semesters
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-purple-600">3</div>
                <div
                  className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Faculties
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <AnimatePresence>
        {previewData.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={closePreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`w-full max-w-6xl h-full max-h-[90vh] rounded-lg overflow-hidden ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`flex items-center justify-between p-3 sm:p-4 border-b ${
                  isDarkMode
                    ? "border-gray-700 bg-gray-800"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <h2
                  className={`font-semibold text-sm sm:text-base truncate pr-4 ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {previewData.title}
                </h2>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className={`px-2 py-1.5 h-8 text-xs ${
                      isDarkMode
                        ? "border-gray-600 hover:bg-gray-700 text-gray-300"
                        : "border-gray-300 hover:bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => handleDownload(previewData.url)}
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className={`px-2 py-1.5 h-8 text-xs ${
                      isDarkMode
                        ? "border-gray-600 hover:bg-gray-700 text-gray-300"
                        : "border-gray-300 hover:bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => window.open(previewData.url, "_blank")}
                  >
                    <Maximize2 className="h-3 w-3 mr-1" />
                    Full Screen
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className={`px-2 py-1.5 h-8 text-xs ${
                      isDarkMode
                        ? "border-gray-600 hover:bg-gray-700 text-gray-300"
                        : "border-gray-300 hover:bg-gray-100 text-gray-700"
                    }`}
                    onClick={closePreview}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="h-full">
                <iframe
                  src={previewData.url}
                  className="w-full h-full border-0"
                  title={previewData.title}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
