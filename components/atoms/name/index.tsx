import styles from './styles.module.css';
import useCheckViewport from '@/utils/checkViewport';

export default function Name() {
  const viewportWidth = useCheckViewport();

  const getHeadlineText = (viewportWidth: number | undefined): string => {
    if (viewportWidth === undefined) return 'Sergio';

    if (viewportWidth < 480) return 'Sergio';
    else if (viewportWidth < 768) return 'Sergio Garcia';
    else return 'Sergio Garcia Gallego';
  };

  const headlineText = getHeadlineText(viewportWidth);

  if (viewportWidth === undefined) {
    return <h1 className={`${styles.properties} ${styles.preload}`}>Sergio</h1>;
  }

  const letters = headlineText.replace(/\s+/g, '').length;

  const quadraticCurve = (index: number, total: number): string => {
    const isEven = total % 2 === 0;
    const mid = isEven ? total / 2 - 0.5 : Math.floor(total / 2);
    const multiplier =
      viewportWidth < 480 ? 0.027 : viewportWidth < 768 ? 0.009 : 0.003;
    const delay = multiplier * Math.pow(index - mid, 2);

    return delay.toFixed(2);
  };

  return (
    <h1 className={styles.properties}>
      {headlineText.split('').map((char, index) => {
        const delay =
          char !== ' '
            ? quadraticCurve(
                index - (headlineText.slice(0, index).split(' ').length - 1),
                letters
              )
            : '0';

        return (
          <span
            key={index}
            style={{ '--delay': `${delay}s` } as React.CSSProperties}
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
}
