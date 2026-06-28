import {
  ArrowLeft, ArrowRight, Award, Briefcase, Building, Calendar,
  Check, CheckCircle2, ChevronRight, Clock, Compass, CreditCard,
  Euro, FileText, Gift, GraduationCap, Heart, Layers, Lightbulb,
  Map, MapPin, Menu, MessageCircle, PenLine, Phone, Quote,
  RefreshCw, RotateCcw, Scale, Send, Shield, Sparkles, Sprout,
  Target, TrendingUp, Users, Video, X,
} from 'lucide-react'

const ICONS: Record<string, React.ElementType> = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'award': Award,
  'briefcase': Briefcase,
  'building': Building,
  'calendar': Calendar,
  'check': Check,
  'check-circle': CheckCircle2,
  'chevron-right': ChevronRight,
  'clock': Clock,
  'compass': Compass,
  'credit-card': CreditCard,
  'euro': Euro,
  'file-text': FileText,
  'gift': Gift,
  'graduation-cap': GraduationCap,
  'heart': Heart,
  'layers': Layers,
  'lightbulb': Lightbulb,
  'map': Map,
  'map-pin': MapPin,
  'menu': Menu,
  'message-circle': MessageCircle,
  'pen-line': PenLine,
  'phone': Phone,
  'quote': Quote,
  'refresh': RefreshCw,
  'rotate-ccw': RotateCcw,
  'scale': Scale,
  'send': Send,
  'shield': Shield,
  'sparkles': Sparkles,
  'sprout': Sprout,
  'target': Target,
  'trending-up': TrendingUp,
  'users': Users,
  'video': Video,
  'x': X,
}

export default function Icon({ name }: { name: string }) {
  const Comp = ICONS[name]
  if (!Comp) return null
  return <Comp />
}
