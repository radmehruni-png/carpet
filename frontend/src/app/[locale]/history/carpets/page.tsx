import {useTranslations} from 'next-intl';

export default function HistoryOfCarpets() {
  const t = useTranslations('HistoryOfCarpets');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('paragraph1')}</p>
      <p>{t('paragraph2')}</p>
      <p>{t('paragraph3')}</p>
    </div>
  );
}
