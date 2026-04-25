import Image from 'next/image';
import styles from './FloatingContact.module.css';

const FloatingContact = () => {
  const phone = "0368.444.567";
  const phoneRaw = "0368444567";

  return (
    <div className={styles.wrapper}>
      {/* Left side: Zalo and SMS with Pulsing */}
      <div className={styles.leftGroup}>
        {/* Zalo */}
        <a
          href={`https://zalo.me/${phoneRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnBase}
          title="Chat Zalo"
        >
          <div className={`${styles.pulsingEffect} ${styles.zaloPulse}`}></div>
          <div className={`${styles.iconBox} ${styles.zaloBox}`}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
              alt="Zalo"
              width={30}
              height={30}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </a>

        {/* SMS */}
        <a
          href={`sms:${phoneRaw}`}
          className={styles.btnBase}
          title="Gửi SMS"
        >
          <div className={`${styles.pulsingEffect} ${styles.smsPulse}`}></div>
          <div className={`${styles.iconBox} ${styles.smsBox}`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
        </a>
      </div>

      {/* Right side: Phone with pulse effect */}
      <div className={styles.rightGroup}>
        <a href={`tel:${phoneRaw}`} className={styles.btnBase}>
          <div className={`${styles.pulsingEffect} ${styles.phonePulse}`}></div>
          <div className={styles.phoneBtn}>
            <div className={`${styles.iconBox} ${styles.phoneBox}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <span className={styles.phoneLabel}>{phone}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FloatingContact;
