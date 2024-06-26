export async function GET() {
  const magazineList = [
    {
      articleNo: 1,
      title: '비타민C',
      imageUrl:
        'https://www.dsm.com/human-nutrition/ko_KR/talking-nutrition/get_to_know_vitamin_C_megadose/_jcr_content/root/responsivegrid/container_middle/content/responsivegrid_main/image.coreimg.82.1024.jpeg/1645981611029/fresh-orange-juice-g6f03de1a7-1280.jpeg',
      description:
        '비타민C는 체내 물질 대사 및 생리 기능을 위한 필수 영양소 중 하나로 면역력 강화, 세포 손상 방지 등 다양한 효능을 가지고 있습니다.',
    },
    {
      articleNo: 2,
      title: '[루테인 효능] 루테인이 눈건강에 좋은 이유 3가지',
      imageUrl:
        'https://health.chosun.com/site/data/img_dir/2022/12/30/2022123001424_0.jpg',
      description: '황반변성엔 효과 확실, 일반 노화엔 "글쎄…"',
    },
    {
      articleNo: 3,
      title: '우리는 칼슘과 함께 자란다',
      imageUrl:
        'https://d83r1jteficfv.cloudfront.net/part/thumbnail/Yh-C2HP4JuXgcltdqGeGk.png?w=840&h=570&q=80',
      description: '칼슘의 효능, 칼슘 고르는 방법을 알아봐요.',
    },
  ];

  return Response.json({ magazineList });
}
