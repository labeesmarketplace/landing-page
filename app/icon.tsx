import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      >
        <img
          src="/icon.png"
          width={32}
          height={32}
          style={{ borderRadius: '50%' }}
          alt="Labees Icon"
        />
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}
