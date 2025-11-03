import {useTranslations} from 'next-intl';

export default function HistoryOfPersia() {
  const t = useTranslations('HistoryOfPersia');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('paragraph1')}</p>
      <h2>{t('achaemenidTitle')}</h2>
      <p>{t('achaemenidParagraph')}</p>
      <h2>{t('parthianTitle')}</h2>
      <p>{t('parthianParagraph')}</p>
      <h2>{t('sasanianTitle')}</h2>
      <p>{t('sasanianParagraph')}</p>
    </div>
  );
}
