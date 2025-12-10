import { FileText } from 'lucide-react'
import { motion } from 'motion/react'
import { useMemo, useState } from 'react'
import PreviewModal from './Preview'
import type { Question } from '@/types'

const QuestionCard = ({
  item,
  index,
  showContext,
}: {
  item: Question
  index: number
  showContext?: boolean
}) => {
  const [showPreview, setShowPreview] = useState(false)

  // Memoize download link to prevent recalculation
  const downloadLink = useMemo(() => {
    try {
      const idMatch = item.link.match(/\/d\/(.+?)\//)
      return idMatch
        ? `https://drive.google.com/uc?export=download&id=${idMatch[1]}`
        : item.link
    } catch {
      return item.link
    }
  }, [item.link])

  return (
    <>
      <motion.div
        // Removed 'layout' prop to improve performance
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.1 } }}
        transition={{
          duration: 0.2, // Faster animation (was 0.3 or default)
          delay: Math.min(index * 0.02, 0.15), // Cap delay at 0.15s maximum
          ease: 'easeOut',
        }}
        className="group flex flex-col justify-between p-5 bg-bg-card border border-border-subtle rounded-xl hover:border-text-primary transition-colors duration-200"
      >
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-text-secondary">
              <FileText size={14} />
              <span className="font-mono text-[10px] font-bold uppercase">
                PDF
              </span>
            </div>
            {showContext && item.semester && (
              <span className="font-mono text-[10px] text-text-secondary bg-bg-secondary px-2 py-1 rounded border border-border-subtle">
                {item.semester.replace(/_/g, ' ')}
              </span>
            )}
          </div>

          <button
            onClick={() => setShowPreview(true)}
            className="block text-left w-full"
          >
            <h3 className="font-header text-lg font-semibold text-text-primary leading-tight mb-2 group-hover:text-accent transition-colors">
              {item.text}
            </h3>
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-border-subtle flex gap-3">
          <button
            onClick={() => setShowPreview(true)}
            className="flex-1 text-center py-2 rounded border border-border-subtle bg-bg-card text-xs font-bold text-text-secondary hover:bg-bg-secondary hover:text-text-primary transition-colors"
          >
            PREVIEW
          </button>
          <a
            href={downloadLink}
            className="flex-1 flex items-center justify-center gap-2 text-center py-2 rounded bg-text-primary text-bg-primary text-xs font-bold hover:opacity-90 transition-opacity"
          >
            <span>DOWNLOAD</span>
          </a>
        </div>
      </motion.div>

      {showPreview && (
        <PreviewModal
          isOpen={showPreview}
          onClose={() => setShowPreview(false)}
          link={item.link}
          title={item.text}
        />
      )}
    </>
  )
}
export default QuestionCard
