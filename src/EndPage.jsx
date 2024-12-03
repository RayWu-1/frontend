import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import artifactCover from './assets/image 22.svg'
import {Artifact} from './Artifact.jsx'
import background from './assets/MAMA_Background_with_Curves.svg'
import more from './assets/more.svg'
import next from './assets/next.svg'

function EndPage() {

  return (
      <div className="EndPage" style={{backgroundImage: `url(${background})`}}>
          <h1 className={'titleChinese'}>自我认知部分观览结束</h1>
          <h1 className={'titleEnglish'}>This is the end of the section</h1>
          <h1 className={'sectionName'}>Self Awareness</h1>
          <div className={'artifactTitleContainer'}>
              <h2 className={'artifactTitle'}>荀子与《性恶论》</h2>
          </div>
          <div className={'artifact-container'}>
              <img src={artifactCover} className={'artifactCover'}></img>
          </div>
          <button className={'button'}>
              <img className={'more'} src={more}></img>
          </button>
          <button className={'button'}>
              <img src={next} className={'next'}></img>
          </button>
      </div>
  )
}

export default EndPage
