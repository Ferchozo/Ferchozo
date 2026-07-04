import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  return (
    <footer className="section-darker border-t border-white/10 py-12">
      <div className="mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <SocialLinks variant="footer" />
        <div className="text-center md:text-right">
          <p className="font-nav text-xs uppercase tracking-[0.25em] text-brand-muted">
            Ecuador · Desarrollo Web &amp; IoT
          </p>
          <p className="mt-2 font-nav text-xs uppercase tracking-[0.2em] text-white/50">
            &copy; 2026 Ferchonand0
          </p>
        </div>
      </div>
    </footer>
  );
}
