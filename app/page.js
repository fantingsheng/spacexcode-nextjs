'use client';
import Image from "next/image";
import Link from 'next/link';
import { Container, Button, Box, Flex, Text, TextArea, Strong } from '@radix-ui/themes';
import { useEffect } from 'react';

function MapContainer() {
  let map = null;
 
  useEffect(() => {
    import("@amap/amap-jsapi-loader").then(AMapLoader => {
    AMapLoader.load({
      key: "f92d916868bf43323d76c1f76702d2a6", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        map = new AMap.Map("container", {
          viewMode: "3D", // 是否为3D地图模式
          zoom: 11, // 初始化地图级别
          center: [120.325121, 31.498017], // 初始化地图中心点位置
        });
        const marker = new AMap.Marker({
          position: new AMap.LngLat(120.325121, 31.498017),
          content: '<div class="custom-content-marker">' +
          '   <img src="/img/poi-marker-red.png" width="30">' +
          '</div>',
          offset: new AMap.Pixel(-50, -15)
        })
        map.add(marker);
      })
      .catch((e) => {
        console.log(e);
      });
    })
  
    return () => {
      map?.destroy();
    };
  }, []);

  return (
    <div
      id="container"
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

export default function Home() {
  return (
    <main className="">
      <Container>
        <nav className="flex sticky top-0 z-10 bg-[#fff]">
          <div>快生图</div>
          <ul className="flex ml-10">
            <li><Link href="/">Index</Link></li>
            <li><Link href="/">About</Link></li>
          </ul>
        </nav>
      {/* <aside className="w-full sm:w-[430px] bg-primary min-h-screen sm:overflow-y-auto sm:overflow-x-hidden sm:absolute top-0 bottom-0 px-5">
        <div className='pt-3'>
          <nav className='flex justify-end'>
            <Button>添加</Button>
          </nav>
          <header className='py-16 text-center'>
            <h3>足迹</h3>
          </header>
          <section>
            <div className='sticky top-0 z-10 flex justify-between px-5 py-4 -mx-5 bg-blur'>
              <h1 className='text-2xl font-bold text-primary'>所有线路</h1>
            </div>
            <ol className='pt-1'>
              <a className='relative block p-4 mb-5 transition border rounded border-primary hover:border-primary-hover'>

              </a>
              <a className='relative block p-4 mb-5 transition border rounded border-primary hover:border-primary-hover'>
                
              </a>
            </ol>
          </section>
          <footer className='pb-6 text-center text-secondary'>
            @copyright 2024, Created by <Link href="https://spacexcode.com/author">Timfan</Link>.
          </footer>
        </div>
      </aside> */}
        <div className='block relative w-full pt-10 pb-10'>
          <Flex gap="4" justify="between">
            <div className="w-full">
              <Box className="bg-[#E6E4E0] p-4">
                预览区域
              </Box>
              <Box className="bg-[#E6E4E0] p-4 mt-4">
                <Text><Strong>输入内容</Strong></Text>
                <TextArea placeholder="Reply to comment…" />
              </Box>
            </div>
            <Box className="bg-[#E6E4E0] sm:w-[430px] p-4">
              配置区域
            </Box>
          </Flex>
        </div>
        <footer className='pb-6 text-center text-secondary'>
          @copyright 2024, Created by <Link href="https://spacexcode.com/author">Timfan</Link>.
        </footer>
      </Container>
    </main>
  );
}
