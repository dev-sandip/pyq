import { motion } from 'motion/react'
import type { SemesterTabProps } from '@/types'
import { cn } from '@/lib/cn'

const SemesterTab: React.FC<SemesterTabProps> = ({
  label,
  active,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={cn(
      'relative px-6 py-3 font-header font-semibold text-sm tracking-wide uppercase transition-all duration-300',
      'border-r border-tungsten min-w-max',
      active
        ? 'text-black bg-white'
        : 'text-gray-500 hover:text-safety hover:bg-tungsten/50',
    )}
  >
    {active && (
      <motion.div
        layoutId="activeTab"
        className="absolute bottom-0 left-0 w-full h-0.5 bg-safety"
      />
    )}
    {label.replace('_', ' ')}
  </button>
)
export default SemesterTab
