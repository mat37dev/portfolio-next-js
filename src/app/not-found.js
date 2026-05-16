import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-8xl font-bold text-primary-400 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-3">Page introuvable</h2>
            <p className="text-gray-400 mb-8 max-w-md">
                Cette page n&apos;existe pas ou a été déplacée.
            </p>
            <Link
                href="/"
                className="px-8 py-3 rounded-lg border border-gray-600 hover:border-primary-500 font-medium bg-slate-900 text-white transition-colors duration-300"
            >
                Retour à l&apos;accueil
            </Link>
        </div>
    );
}
