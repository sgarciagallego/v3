import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { siteConfig } from '@/lib/constant';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const hasTitle = searchParams.has('title');
  const title = hasTitle ? searchParams.get('title') : 'Default title';

  const font = fetch(
    new URL('../../../fonts/static/og.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: `url(${siteConfig.url}/opengraph-bg.jpg)`,
        }}
      >
        <div
          style={{
            marginLeft: 64,
            marginRight: 64,
            paddingBottom: 128,
            display: 'flex',
            fontSize: 67.77805236,
            fontFamily: 'Bricolage_Grotesque',
            color: 'rgb(250 250 250)',
            lineHeight: 1.15,
            letterSpacing: '-0.0375em',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Bricolage_Grotesque',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
