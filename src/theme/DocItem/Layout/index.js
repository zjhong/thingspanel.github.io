import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import styles from './styles.module.css';
import AdSense from '@site/src/components/AdSense';

export default function DocItemLayout({children}) {
  const {
    frontMatter,
    metadata,
    toc
  } = useDoc();
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel
  } = frontMatter;
  const {width} = useWindowSize();
  const canRenderTOC = !hideTableOfContents && toc.length > 0;
  const renderTocDesktop = canRenderTOC && (width > 996);

  return (
    <div className="row">
      <div className={clsx('col', !hideTableOfContents && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {canRenderTOC && <DocItemTOCMobile />}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <AdSense />  {/* 在文档内容下方添加广告 */}
          <DocItemPaginator />
        </div>
      </div>
      {renderTocDesktop && (
        <div className="col col--3">
          <DocItemTOCDesktop
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        </div>
      )}
    </div>
  );
}