const axios = require('axios')
const cron = require('node-cron')

// Fungsi untuk mengirim permintaan POST ke endpoint yang diinginkan
const sendAttendanceRequestEnterAtOffice = async () => {
  try {
    const requestBody = {
      employeeId: '6020595',
      password: '6020595',
      latitude: -7.7568951,
      longitude: 110.3895945
    }

    const response = await axios.post(
      'https://stepup.srv4.stechoq.com/api/attendance/presence/attend/enter',
      requestBody
    )

    console.log(
      'Berhasil absen datang di Kantor Stechoq Sawitsari\n',
      'Response:',
      response.data
    )
  } catch (error) {
    console.error(
      'Gagal absen datang di Kantor Stechoq Sawitsari\n',
      'Error:',
      error.message
    )
  }
}

const sendAttendanceRequestEnterOutsideOffice = async () => {
  try {
    const requestBody = {
      employeeId: '6020595',
      password: '6020595',
      latitude: -7.7823905,
      longitude: 110.4157975,
      userIsOutstation: 1,
      userOutstationDescription: 'UPN "Veteran" Yogyakarta Kampus 2 Babarsari'
    }

    const response = await axios.post(
      'https://stepup.srv4.stechoq.com/api/attendance/presence/attend/enter',
      requestBody
    )

    console.log(
      'Berhasil absen datang di luar Kantor, UPNYK\n',
      'Response:',
      response.data
    )
  } catch (error) {
    console.error(
      'Gagal absen datang di luar Kantor, UPNYK\n',
      'Error:',
      error.message
    )
  }
}

const sendAttendanceLeaveRequestAtOffice = async () => {
  try {
    const requestBody = {
      employeeId: '6020595',
      password: '6020595',
      latitude: -7.7568951,
      longitude: 110.3895945
    }

    const response = await axios.post(
      'https://stepup.srv4.stechoq.com/api/attendance/presence/attend/leave',
      requestBody
    )

    console.log(
      'Berhasil absen pulang di Kantor Stechoq Sawitsari\n',
      'Response:',
      response.data
    )
  } catch (error) {
    console.error(
      'Gagal absen pulang di Kantor Stechoq Sawitsari\n',
      'Error:',
      error.message
    )
  }
}

// Jadwalkan tugas dengan node-cron (senin sampai jumat jam 08.00 pagi)

cron.schedule('38 9 * * 1,3,4', () => {
  sendAttendanceRequestEnterAtOffice()
})

cron.schedule('58 7 * * 2,5', () => {
  sendAttendanceRequestEnterOutsideOffice()
})

cron.schedule('1 17 * * 1-5', () => {
  sendAttendanceLeaveRequestAtOffice()
})
