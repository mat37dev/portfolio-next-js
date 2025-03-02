import { NextResponse } from "next/server";

export async function GET() {
    const baseUrl = "https://mathieucrosnier.fr";

    const urls = [
        `${baseUrl}/`, // Page principale
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.map(url => `<url><loc>${url}</loc></url>`).join('')}
    </urlset>`;

    return new NextResponse(sitemap, {
        headers: { "Content-Type": "application/xml" }
    });
}
