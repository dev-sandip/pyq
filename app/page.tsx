"use client";

import { useState, useMemo, useEffect } from "react";
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
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b bg-card border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  IOE Past Year Questions
                </h1>
                <p className="text-muted-foreground mt-1">
                  Institute of Engineering Past Papers Collection
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="h-10 w-10 p-0 transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors duration-200" />
              <Input
                type="text"
                placeholder="Search subjects across all semesters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base bg-input border-border focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {!searchQuery && (
          <div className="mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {semesters.map((semester) => (
                <Button
                  key={semester}
                  variant={activeSemester === semester ? "default" : "outline"}
                  onClick={() => setActiveSemester(semester)}
                  className={`h-12 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSemester === semester
                      ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                      : "bg-card text-card-foreground border-border hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300"
                  }`}
                >
                  {semester.replace("_", " ")}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            {searchQuery ? `Search Results` : activeSemester.replace("_", " ")}
          </h2>
          <p className="text-muted-foreground">
            {displayedSubjects.length} subject
            {displayedSubjects.length !== 1 ? "s" : ""}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedSubjects.map((subject, index) => {
            const categoryColors = getCategoryColors(subject.text, isDarkMode);
            return (
              <Card
                key={`${subject.text}-${subject.semester}-${index}`}
                className="bg-card border-border hover:shadow-lg transition-all duration-300 group hover:scale-[1.02] hover:border-blue-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg ${categoryColors.iconBg} flex-shrink-0 transition-all duration-300 group-hover:scale-110`}
                    >
                      <categoryColors.icon />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-card-foreground text-base leading-tight mb-2">
                        {subject.text}
                      </h3>
                      <div className="flex items-center gap-2">
                        {searchQuery && (
                          <span className="text-xs px-2 py-1 rounded-md bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">
                            {subject.semester}
                          </span>
                        )}
                        <span
                          className={`${categoryColors.badgeColor} text-xs px-2 py-1 rounded-md border`}
                        >
                          {categoryColors.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 h-9 text-sm bg-card border-border hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all duration-300 hover:scale-105"
                      onClick={() =>
                        handleLinkClick(subject.link, subject.text, true)
                      }
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 h-9 text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-md"
                      onClick={() =>
                        handleLinkClick(subject.link, subject.text, false)
                      }
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12">
          <Card className="bg-card border-border transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {totalQuestions}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Total Papers
                  </div>
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                  <div className="text-muted-foreground font-medium">
                    Semesters
                  </div>
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-muted-foreground font-medium">
                    Faculties
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {previewData.isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closePreview}
        >
          <div
            className="w-full max-w-6xl h-full max-h-[90vh] bg-card rounded-lg overflow-hidden shadow-2xl border border-border animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
              <h2 className="font-semibold text-lg text-card-foreground truncate pr-4">
                {previewData.title}
              </h2>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-9 px-3 bg-card border-border hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105"
                  onClick={() => handleDownload(previewData.url)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-9 px-3 bg-card border-border hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(previewData.url, "_blank")}
                >
                  <Maximize2 className="h-4 w-4 mr-2" />
                  Full Screen
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-9 w-9 p-0 bg-card border-border hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 hover:scale-105"
                  onClick={closePreview}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="h-full">
              <iframe
                src={previewData.url}
                className="w-full h-full border-0"
                title={previewData.title}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
