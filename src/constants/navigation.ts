import HomeIcon from '@/components/NavIcon/HomeIcon';
import MagazineIcon from '@/components/NavIcon/MagazineIcon';
import MypageIcon from '@/components/NavIcon/MypageIcon';
import StoreIcon from '@/components/NavIcon/StoreIcon';

export const NAVIGATIONS = [
  { path: '/', name: '홈', icon: HomeIcon },
  { path: '/store', name: '스토어', icon: StoreIcon },
  { path: '/magazine', name: '매거진', icon: MagazineIcon },
  { path: '/mypage', name: 'MY', icon: MypageIcon },
];

export interface Icon {
  [key: string]: ({ className }: { className: string }) => JSX.Element;
}
