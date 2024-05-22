import MyInfoContainer from '@/components/MyPage/MyInfoContainer';
import MyPageMenu from '@/components/MyPage/MyPageMenu';
import MyPageNav from '@/components/MyPage/MyPageNav';
import Header from '@/components/common/Header';
import NavBar from '@/components/common/NavBar';

const MyPage = () => {
  return (
    <>
      <Header title="마이페이지" />
      <main className="px-4 pb-24 pt-20">
        <MyInfoContainer />
        <MyPageNav />
        <MyPageMenu />
        <button className="text-mainRed mx-auto mt-14 flex text-center">
          로그아웃
        </button>
      </main>
      <NavBar />
    </>
  );
};

export default MyPage;
