const axios = require('axios')
const cron = require('node-cron')

// Fungsi untuk mengirim permintaan POST ke endpoint yang diinginkan
const sendAttendanceRequest = async () => {
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

    console.log('Response:', response.data)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

// Jadwalkan tugas dengan node-cron (senin sampai jumat jam 08.00 pagi)
cron.schedule('1 17 * * 1-5', () => {
  // Mengirim permintaan POST pada jadwal yang ditentukan
  sendAttendanceRequest()
  //   console.log('Attendance request sent. menit 30')
})
