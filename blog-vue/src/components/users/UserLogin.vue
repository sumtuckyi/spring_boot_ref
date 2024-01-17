<script setup>
// import { IconKakaoTalk } from "../icons/IconKakaoTalk.vue";
</script>

<template>
  <div id="div" class="min-h-screen bg-no-repeat bg-cover bg-center">
    <div class="flex justify-end">
      <div class="bg-white min-h-screen w-2/5 flex justify-center items-center">
        <div class="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
          <div
            class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable"
          >
            <div class="flex items-center justify-center w-full lg:p-12">
              <div class="flex items-center xl:p-10">
                <form class="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                  <h3 class="mb-3 text-4xl font-extrabold text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-12 h-12"
                      style="display: inline"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      /></svg
                    >로그인
                  </h3>
                  <a
                    class="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200"
                  >
                    <!-- <IconKakaoTalk /> -->
                    <img src="@/assets/kakaotalk.png" class="w-5 h-5 mr-2" />
                    카카오 로그인
                  </a>
                  <a
                    class="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300"
                  >
                    <!-- <IconKakaoTalk /> -->
                    <img src="@/assets/naver.png" class="w-4 h-4 mr-2" />
                    네이버 로그인
                  </a>
                  <div class="flex items-center mb-3">
                    <hr class="h-0 border-b border-solid border-gray-500 grow" />
                    <p class="mx-4 text-gray-600">or</p>
                    <hr class="h-0 border-b border-solid border-gray-500 grow" />
                  </div>
                  <label for="id" class="mb-2 text-sm text-start text-gray-900">Id*</label>
                  <input
                    id="id"
                    type="text"
                    placeholder="ssafy or ssafy@ssafy.com"
                    class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-300 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
                  />
                  <label for="password" class="mb-2 text-sm text-start text-gray-900"
                    >Password*</label
                  >
                  <input
                    id="password"
                    type="password"
                    placeholder="비밀번호..."
                    class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-300 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
                  />
                  <div class="flex flex-row justify-between mb-8">
                    <label
                      class="relative inline-flex items-center mr-3 cursor-pointer select-none"
                    >
                      <input type="checkbox" checked value="" class="sr-only peer" />
                      <div
                        class="w-5 h-5 bg-white border-2 rounded-sm border-gray-500 peer peer-checked:border-0 peer-checked:bg-purple-400"
                      >
                        <img
                          class=""
                          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                          alt="tick"
                        />
                      </div>
                      <span class="ml-3 text-sm font-normal text-gray-900">아이디 저장</span>
                    </label>
                    <a href="javascript:void(0)" class="mr-4 text-sm font-medium text-purple-400">
                      비밀번호찾기
                    </a>
                  </div>
                  <button
                    class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-500 focus:ring-4 focus:ring-purple-100 bg-purple-400"
                  >
                    Log In
                  </button>
                  <p class="text-sm leading-relaxed text-gray-900">
                    아직 가입 전 인가요?
                    <a href="javascript:void(0)" class="font-bold text-gray-700">계정 만들기</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#div {
  background-image: url("../../assets/login_side.png");
  /* filter: blur(3px); */
}
</style>
