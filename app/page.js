"use client";
import Image from "next/image";
import Link from 'next/link';
import { Container, Button, Box, Flex, Text, TextArea, Strong } from '@radix-ui/themes';

export default function Home() {
  return (
    <Container>
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
  );
}
