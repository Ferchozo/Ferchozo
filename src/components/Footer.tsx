import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  return (
    <footer className="section-dark border-t border-white/10 py-14">
      <div className="mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-10 md:flex-row md:justify-between">
        <SocialLinks variant="footer" />
        <div className="text-center md:text-right">
          <p className="font-nav text-xs uppercase tracking-[0.3em] text-white/50">
            Desarrollo Web &amp; IoT
          </p>
          <p className="mt-3 font-nav text-xs uppercase tracking-[0.25em] text-white/30">
            &copy; 2026 Ferchonand0
          </p>
        </div>
      </div>
    </footer>
  );
}
