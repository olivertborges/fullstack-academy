import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import AcademyHeader from "./AcademyHeader";

type AcademyLayoutProps = {
  children: React.ReactNode;
};

export default function AcademyLayout({ children }: AcademyLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <MobileHeader />

      <div className="flex min-h-screen">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <AcademyHeader />

          {children}
        </div>
      </div>
    </div>
  );
}
