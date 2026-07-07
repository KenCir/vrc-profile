import CyberCard from './CyberCard';

const stats = [
  ['VRC開始', '2024/05/22'],
  ['フルトラ', '2026/04頃〜'],
  ['IN時間', '22:00〜2:00が多め'],
  ['よくいる場所', 'ゲムワ / イベント'],
];

const interests = ['SlashCo VR', '写真', 'アバター改変', '東方Project', 'プログラミング', '音楽', 'イベントスタッフ'];

export default function BioCard() {
  return (
    <>
      <CyberCard label="At a glance">
        <dl className="grid gap-3 sm:grid-cols-2">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded border border-white/8 bg-white/[0.03] px-4 py-3">
              <dt className="text-xs text-slate-400">{label}</dt>
              <dd className="mt-1 text-sm font-medium text-slate-100">{value}</dd>
            </div>
          ))}
        </dl>
      </CyberCard>

      <CyberCard label="How I spend time">
        <div className="space-y-3 text-sm leading-relaxed text-slate-300">
          <p>普段は情報系学生をしながら、リアル・バーチャルのいろいろな場所でイベントスタッフをしています。</p>
          <p>
            VRCではゲムワで遊んだり、イベントに行ったり、写真を撮ったり、アバター改変をするのが好きです。
            ゲムワはSlashCo VRをよく遊んでいます。
          </p>
          <p>基本は22時〜2時頃にいます。たまに昼にいたり、日によっては0時以降や数日いないこともあります。</p>
        </div>
      </CyberCard>

      <CyberCard label="About">
        <p className="text-sm leading-relaxed text-slate-300">
          けんちるです。ゆっくり話したり、一緒に遊んだりできるとうれしいです。気分の波があるので、やさしく接してもらえると助かります。
        </p>
      </CyberCard>

      <CyberCard label="Interests">
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              key={interest}
              className="rounded border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200"
            >
              {interest}
            </span>
          ))}
        </div>
      </CyberCard>
    </>
  );
}
