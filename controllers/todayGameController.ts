import axios from 'axios'
import { Request, Response } from 'express'
import https from 'https'
const agent = new https.Agent({ rejectUnauthorized: false })

const todayGameController = {
  getTodayGame: (req: Request, res: Response) => {
    axios.post('https://www.cpbl.com.tw/home/getdetaillist', { GameDate: '2021-10-19' }, { httpsAgent: agent })
      .then(response => {
        const GameAData = JSON.parse(response.data['GameADetailJson'])
        const GameDData = JSON.parse(response.data['GameDDetailJson'])
        return res.json({
          'GameADetailJson': GameAData,
          'GameDDetailJson': GameDData
        })
      })
      .catch(error => console.log('error', error))
  }
}

module.exports = todayGameController