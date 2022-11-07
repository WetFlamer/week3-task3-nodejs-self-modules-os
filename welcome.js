import rs from 'os'
function r () {
    if(rs.type() === 'Linux') {
        return 'Привет, юзер. Вижу ты зашел с линукс'
    }
    if(rs.type() === 'Darwin') {
        return 'Привет, юзер. Вижу ты зашел с MacOs'
    }
    if(rs.type() === 'Windows_NT') {
        return 'Привет, юзер. Вижу ты зашел с Windows'
    }
}
export default r