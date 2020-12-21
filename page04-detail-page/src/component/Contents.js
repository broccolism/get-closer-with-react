import React from "react";

import review0 from "../assets/reviews/0.webp";
import review1 from "../assets/reviews/1.webp";
import review2 from "../assets/reviews/2.webp";
import review3 from "../assets/reviews/3.webp";
import review4 from "../assets/reviews/4.webp";
import review5 from "../assets/reviews/5.webp";
import review6 from "../assets/reviews/6.webp";
import profile1 from "../assets/profile-none.png";
import profile2 from "../assets/profile-sea.webp";
import classIntroPhone from "../assets/details/phone/class-intro.png";
import classIntroDesktop from "../assets/details/desktop/class-intro.png";

import grayAdImage from "../assets/ad-branding.png";
import purpleAdImage from "../assets/ad-one-plus-one.png";
import orangeAdImage from "../assets/ad-full.png";
import Grid from "@material-ui/core/grid";
import InfoIcon from "@material-ui/icons/Info";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import { theme } from "../App";
import menus from "../consts/menuItems";
import { phoneMarginHorizontal, desktopWidth } from "../consts/width";
import colors from "../consts/colors";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    width: "100vw",
    [theme.breakpoints.up("md")]: {
      width: desktopWidth,
    },
  },
  purpleAd: {
    backgroundColor: `${colors.purple}`,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  purpleAdTextWrapper: {
    color: "#fff",
    marginLeft: `${phoneMarginHorizontal}px`,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  purpleAdImage: {
    marginRight: "10px",
    width: "17vw",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  purpleAdTopText: {
    fontSize: "17px",
    fontWeight: "800",
    marginBottom: "8px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  purpleAdBottomText: {
    fontSize: "12px",
    fontWeight: "500",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  discountAd: {
    backgroundColor: `${colors.lightLightGray}`,
    margin: `${phoneMarginHorizontal}px`,
    padding: `${phoneMarginHorizontal}px`,
    borderRadius: "4px",
  },
  discountAdTopText: {
    fontSize: "16px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  },
  discountAdBottomText: {
    fontSize: "12px",
  },
  discountAdIcon: {
    fontSize: "22px",
  },
  orangeAdImage: {
    width: "100%",
    objectFit: "cover",
    marginBottom: "0px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grayAdImage: {
    width: "100%",
    objectFit: "cover",
    marginBottom: "0px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  summarySection: {
    margin: `24px ${phoneMarginHorizontal}px 24px ${phoneMarginHorizontal}px`,
  },
  summaryTitle: {
    fontSize: "17px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  summaryItem: {
    marginBottom: "6px",
  },
  summaryLeftText: {
    width: "110px",
    display: "inline-block",
    color: `${colors.gray}`,
    backgroundColor: "#fff",
    fontSize: "15px",
    fontWeight: "600",
  },
  summaryRightText: { display: "inline", fontSize: "15px" },
  divider: {
    backgroundColor: `${colors.lightGray}`,
    height: "2px",
    margin: `15px ${phoneMarginHorizontal}px 15px ${phoneMarginHorizontal}px`,
  },
  reviewImageSection: {
    padding: `70px ${phoneMarginHorizontal}px 0px ${phoneMarginHorizontal}px`,
  },
  reviewTitle: {
    fontWeight: "700",
    paddingBottom: "30px",
  },
  reviewLinks: {
    marginBottom: "20px",
  },
  reviewLinkItem: {
    textAlign: "center",
  },
  reviewLinkItemTitle: {
    color: `${colors.gray}`,
    fontSize: "11px",
    fontWeight: "600",
  },
  reviewLinkItemContent: {
    fontSize: "32px",
    fontWeight: "800",
  },
  reviewLinkItemContentSmall: {
    fontSize: "18px",
  },
  verticalDivider: {
    width: "1px",
    backgroundColor: `${colors.lightGray}`,
  },
  reviewImageListWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: "20px",
  },
  reviewImageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  reviewImageItem: {
    width: "40vw",
    borderRadius: "8px",
    overflow: "hidden",
  },
  reviewTextSection: {
    margin: `30px ${phoneMarginHorizontal}px 50px ${phoneMarginHorizontal}px`,
  },
  reviewTextItem: {
    marginBottom: "24px",
  },
  reviewProfileCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "40px",
    border: `1px solid ${colors.lightGray}`,
    position: "absolute",
  },
  reviewProfileThumb: {
    position: "relative",
    left: "28px",
    top: "20px",
  },
  thumbIcon: {
    padding: "3px",
    fontSize: "12px",
    backgroundColor: `${colors.orange}`,
    color: "#fff",
    borderRadius: "100px",
  },
  reviewerDesc: {
    marginTop: "16px",
    marginLeft: "40px",
  },
  reviewerName: {
    fontSize: "12px",
  },
  reviewDate: {
    fontSize: "12px",
  },
  reviewContent: {
    marginTop: "12px",
    fontSize: "16px",
  },
  reviewShowMore: {
    color: `${colors.orange}`,
    fontSize: "16px",
  },
  reviewShowMorePlus: { fontSize: "24px" },
  sectionWrapper: {
    padding: `60px ${phoneMarginHorizontal}px 30px ${phoneMarginHorizontal}px`,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: "26px",
    marginBottom: "20px",
  },
  sectionTitleBold: { fontWeight: "800" },
  sectionDesc: {
    marginTop: "16px",
    marginBottom: "16px",
    fontSize: "15px",
  },
  sectionDescBold: { fontWeight: "700" },
  classIntroImagePhone: {
    width: "90vw",
  },
  classIntroImageDesktop: {
    width: "100%",
  },
  testing2: {
    paddingTop: "700px",
    paddingBottom: "700px",
    backgroundColor: "#444",
    color: "#fff",
  },
});

const reviewImages = [
  { img: review0 },
  { img: review1 },
  { img: review2 },
  { img: review3 },
  { img: review4 },
  { img: review5 },
  { img: review6 },
];

function classSummary(classes, leftText, rightText) {
  return (
    <div className={classes.summaryItem}>
      <div className={classes.summaryLeftText}>{leftText}</div>
      <div className={classes.summaryRightText}>{rightText}</div>
    </div>
  );
}

function isUsingPhone() {
  if (window.innerWidth > theme.values.md) {
    return false;
  }

  return true;
}

function Contents({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.purpleAd}>
        <Grid container justify="space-between" alignItems="center">
          <div className={classes.purpleAdTextWrapper}>
            <div className={classes.purpleAdTopText}>
              머니·커리어 1+1 특별 할인!
            </div>
            <div className={classes.purpleAdBottomText}>
              인기 클래스만 모아 최대 53% 할인
            </div>
          </div>
          <img className={classes.purpleAdImage} alt="ad" src={purpleAdImage} />
        </Grid>
      </div>
      <div className={classes.discountAd}>
        <div className={classes.discountAdTopText}>
          <InfoIcon className={classes.discountAdIcon} />
          &nbsp;최초, 머니 커리어 클래스 역대급 할인
        </div>
        <div className={classes.discountAdBottomText}>
          지금 이 기간에만 만날 수 있어요!
        </div>
      </div>
      <img className={classes.orangeAdImage} alt="ad" src={orangeAdImage} />
      <img className={classes.grayAdImage} alt="ad" src={grayAdImage} />
      <div className={classes.summarySection}>
        <div className={classes.summaryTitle}>클래스 정보</div>
        {classSummary(classes, "클래스 분량", "10개 챕터, 40개 세부강의")}
        {classSummary(classes, "수강 가능일", "바로 수강 가능")}
        {classSummary(classes, "자막 포함 여부", "포함")}
      </div>
      <div className={classes.divider} />
      <div className={classes.reviewImageSection}>
        <div className={classes.reviewTitle}>
          실제 수강생들의
          <br />
          생생한 후기
        </div>
        <Grid className={classes.reviewLinks} container justify="space-evenly">
          <div className={classes.reviewLinkItem}>
            <div className={classes.reviewLinkItemTitle}>클래스 후기</div>
            <div className={classes.reviewLinkItemContent}>565</div>
          </div>
          <div className={classes.verticalDivider} />
          <div className={classes.reviewLinkItem}>
            <div className={classes.reviewLinkItemTitle}>수강생 만족도</div>
            <div className={classes.reviewLinkItemContent}>
              98<span className={classes.reviewLinkItemContentSmall}>%</span>
            </div>
          </div>
        </Grid>
      </div>
      <div className={classes.reviewImageListWrapper}>
        <GridList className={classes.reviewImageList} cols={2.5}>
          {reviewImages.map((item, index) => {
            return (
              <GridListTile className={classes.reviewImageItem} key={index}>
                <img src={item.img} alt="" />
              </GridListTile>
            );
          })}
        </GridList>
      </div>
      <div className={classes.divider} />
      <div className={classes.reviewTextSection}>
        <div className={classes.reviewTextItem}>
          <Grid container justify="flex-start" alignItems="center">
            <div className={classes.reviewProfile}>
              <img className={classes.reviewProfileCircle} src={profile1} />
              <div className={classes.reviewProfileThumb}>
                <ThumbUpAltIcon className={classes.thumbIcon} />
              </div>
            </div>
            <div className={classes.reviewerDesc}>
              <div className={classes.reviewerName}>챈</div>
              <div className={classes.reviewDate}>2020. 11. 22.</div>
            </div>
          </Grid>
          <div className={classes.reviewContent}>
            브랜딩 ㄷ자인 뿐 아니라 디자이너로서 가져야 할 태도 , 포트폴리오 팁,
            커뮤니케이션 능력 등 폭 넓은 주제를 상세하게 알려주셔서 유용합니다
          </div>
        </div>
        <div className={classes.reviewTextItem}>
          <Grid container justify="flex-start" alignItems="center">
            <div className={classes.reviewProfile}>
              <img className={classes.reviewProfileCircle} src={profile2} />
              <div className={classes.reviewProfileThumb}>
                <ThumbUpAltIcon className={classes.thumbIcon} />
              </div>
            </div>
            <div className={classes.reviewerDesc}>
              <div className={classes.reviewerName}>백**</div>
              <div className={classes.reviewDate}>2020. 11. 20</div>
            </div>
          </Grid>
          <div className={classes.reviewContent}>
            요즘 그래픽디자인이나 브랜딩쪽에 관심이 생겨서 유튜브쪽으로만 보다가
            더 배우고 싶어서 클래스101들어왔다가 질렀(?)..는데 강의가 너무
            재밌네요! 제가 원하는 내용이 다 들어있어서 좋은 것 같아요ㅎㅎ
          </div>
        </div>
        <div className={classes.reviewShowMore}>
          <span className={classes.reviewShowMorePlus}>+</span> 더보기
        </div>
      </div>
      <div className={classes.sectionWrapper} id={menus[0].id}>
        <div className={classes.sectionTitle}>
          타블렛/Ps, Ai를 활용해
          <br />
          <span className={classes.sectionTitleBold}>총 8개의 작품 </span>
          만들기
        </div>
        <div className={classes.sectionDesc}>
          한 작품을 만들어보는 데에
          <span className={classes.sectionDescBold}> 2~4시간 </span>정도가
          소요됩니다.
        </div>
        {isUsingPhone() ? (
          <img
            className={classes.classIntroImagePhone}
            src={classIntroPhone}
            alt="image"
          />
        ) : (
          <img
            className={classes.classIntroImageDesktop}
            src={classIntroDesktop}
            alt="image"
          />
        )}
      </div>
      <div className={classes.sectionWrapper} id={menus[1].id}>
        <div className={classes.sectionTitle}>커리큘럼</div>
        <div className={classes.sectionDesc}>
          클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다. 콘텐츠는 배우기
          쉽게 영상, 수업노트, 첨부파일로 구성되어있습니다.
        </div>
      </div>
      <div className={classes.testing2} id={menus[2].id}>
        TESTING2
      </div>
      <div className={classes.testing2} id={menus[3].id}>
        TESTING3
      </div>
      <div className={classes.testing2} id={menus[4].id}>
        TESTING4
      </div>
      <div className={classes.testing2} id={menus[5].id}>
        TESTING5
      </div>
      <div className={classes.testing2} id={menus[6].id}>
        TESTING6
      </div>
    </div>
  );
}

export default withStyles(styles)(Contents);
