const convertDriveToPreviewLink = (link: string): string => {
  try {
    const idMatch = link.match(/\/d\/(.+?)\//)
    if (idMatch && idMatch[1])
      return `https://drive.google.com/file/d/${idMatch[1]}/preview`
    return link
  } catch {
    return link
  }
}

// --- COMPONENT: Preview Modal ---
const PreviewModal = ({
  isOpen,
  onClose,
  link,
  title,
}: {
  isOpen: boolean
  onClose: () => void
  link: string
  title: string
}) => {
  if (!isOpen) return null
  const previewUrl = convertDriveToPreviewLink(link)

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-bg-card w-full max-w-5xl h-[85vh] rounded-xl border border-border-subtle shadow-2xl flex flex-col overflow-hidden relative">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-bg-secondary">
          <h3 className="font-header font-bold text-lg text-text-primary truncate pr-4">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-border-subtle rounded-full transition-colors text-text-secondary hover:text-text-primary"
          >
            <span className="sr-only">Close</span>✕
          </button>
        </div>

        {/* Iframe Container */}
        <div className="flex-1 bg-gray-100 relative">
          <iframe
            src={previewUrl}
            className="w-full h-full"
            allow="autoplay"
            title="PDF Preview"
          />
        </div>
      </div>

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  )
}
export default PreviewModal
