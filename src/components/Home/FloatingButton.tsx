import Image from 'next/image';

const FloatingButton = () => {
  return (
    <button className="fixed bottom-[94px] right-4 z-10 flex h-[60px] w-[70px] flex-col items-center justify-center rounded-[10px] bg-white p-[10px] shadow-card transition hover:scale-105 lg:absolute lg:bottom-6">
      <Image src="/icons/chat.svg" width={24} height={24} alt="문의하기 버튼" />
      <span className="text-xs font-medium">문의하기</span>
    </button>
  );
};

export default FloatingButton;
