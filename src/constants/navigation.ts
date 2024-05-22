import HomeIcon from '@/components/Icon/HomeIcon';
import MagazineIcon from '@/components/Icon/MagazineIcon';
import MypageIcon from '@/components/Icon/MypageIcon';
import StoreIcon from '@/components/Icon/StoreIcon';

export const NAVIGATIONS = [
  { path: '/', name: '홈', icon: HomeIcon },
  { path: '/store', name: '스토어', icon: StoreIcon },
  { path: '/magazine', name: '매거진', icon: MagazineIcon },
  { path: '/mypage', name: 'MY', icon: MypageIcon },
];

export interface Icon {
  [key: string]: ({ className }: { className: string }) => JSX.Element;
}
