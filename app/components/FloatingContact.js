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
            <span className={styles.smsIcon}>✉️</span>
          </div>
        </a>
      </div>

      {/* Right side: Phone with pulse effect */}
      <div className={styles.rightGroup}>
        <a href={`tel:${phoneRaw}`} className={styles.btnBase}>
          <div className={`${styles.pulsingEffect} ${styles.phonePulse}`}></div>
          <div className={styles.phoneBtn}>
            <div className={`${styles.iconBox} ${styles.phoneBox}`}>📞</div>
            <span className={styles.phoneLabel}>{phone}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FloatingContact;
