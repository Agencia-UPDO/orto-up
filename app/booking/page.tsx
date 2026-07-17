import { permanentRedirect } from 'next/navigation';

export default function LegacyBookingPage() {
  permanentRedirect('/agendamento');
}
