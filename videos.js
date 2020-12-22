;(() => {
  const videosList = [
    'https://tdrmos.ru/upload/iblock/26c/88b35132_4762_4c23_95c2_d63980489c0a.mov',
    'https://tdrmos.ru/upload/iblock/4a6/4f81cdcb_78de_45a3_8aa5_ecbb4eef1045.mp4',
    'https://tdrmos.ru/upload/iblock/415/1a3f6ee5_e5d3_441a_82fc_c4a13a740148.mp4',
    'https://tdrmos.ru/upload/iblock/664/69ae3c39_9e08_475f_b80a_0453cde8bb71.mov',
    'https://tdrmos.ru/upload/iblock/26c/88b35132_4762_4c23_95c2_d63980489c0a.mov',
    'https://tdrmos.ru/upload/iblock/4a6/4f81cdcb_78de_45a3_8aa5_ecbb4eef1045.mp4',
    'https://tdrmos.ru/upload/iblock/415/1a3f6ee5_e5d3_441a_82fc_c4a13a740148.mp4',
    'https://tdrmos.ru/upload/iblock/664/69ae3c39_9e08_475f_b80a_0453cde8bb71.mov',
    'https://tdrmos.ru/upload/iblock/ad5/2a018e58_0f01_4861_b010_af1b88ce4e9c.mp4',
    'https://tdrmos.ru/upload/iblock/bd9/22d07b3f_0c7b_4645_b4de_b6e76772a680.mpeg',
    'https://tdrmos.ru/upload/iblock/4da/bd8eba23_b191_48c7_9682_28f54433340c.mp4',
    'https://tdrmos.ru/upload/iblock/ac4/264ad7a8_2d21_4a29_a8be_4d8a353d1dd5.mov',
    'https://tdrmos.ru/upload/iblock/856/aed05137_f8af_4124_8dc6_4a19b15be978.mp4',
    'https://tdrmos.ru/upload/iblock/4c7/458feded_5e4e_4586_a470_6e68249d75bd.mov',
    'https://tdrmos.ru/upload/iblock/373/f2320618_0dbf_4aa0_89fb_0a1f2d98c3b7.mp4',
    'https://tdrmos.ru/upload/iblock/108/999dac9c_084d_4e48_a412_f7825d6c8979.mov',
  ]

  const types = {
    mp4: 'mp4',
    mov: 'quicktime',
    mpeg: 'mpeg',
  }

  const videoholder = document.getElementsByClassName('video')[0]
  const placeholder = document.getElementsByClassName('placeholder')[0]

  const showPlaceholder = () => {
    videoholder.style.display = 'none'
    placeholder.style.display = 'block'
  }
  const hidePlaceholder = () => {
    videoholder.style.display = 'block'
    placeholder.style.display = 'none'
  }

  const changeVideo = () => {
    const src = videosList[Math.floor(Math.random() * (videosList.length - 1))]
    const type = `video/${types[src.split('.')[src.split('.').length - 1]]}`
    player.source = {
      type: 'video',
      sources: [
        {
          src,
          type,
        },
      ],
    }
  }

  const player = new Plyr('#player')

  changeVideo()

  player.once('canplay', hidePlaceholder)

  player.once('ended', () => {
    changeVideo()
  })
})()
