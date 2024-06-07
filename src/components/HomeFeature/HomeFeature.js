
import styles from './index.module.css'
import clsx from 'clsx';
export default function HomepageFeatures() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--4', styles.feature)}>
              <img src="/img/image.png" alt="Example feature image" />
              <h3>Feature One</h3>
              <p>描述特性一的内容。</p>
            </div>
            <div className={clsx('col col--4', styles.feature)}>
              <img src="/img/image.png" alt="Example feature image" />
              <h3>Feature Two</h3>
              <p>描述特性二的内容。</p>
            </div>
            <div className={clsx('col col--4', styles.feature)}>
              <img src="/img/image.png" alt="Example feature image" />
              <h3>Feature Three</h3>
              <p>描述特性三的内容。</p>
            </div>
          </div>
        </div>
      </section>
    );
  }