import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Anderson Siding and Construction. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/terms" className="hover:underline">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
}