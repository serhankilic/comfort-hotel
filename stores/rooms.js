import { defineStore } from 'pinia'

export const useRoomsStore = defineStore('roomsStore', {
    state: () => {
        return {
            roomsInfo: [
                {
                    roomId: 'classic_room',
                    roomName: 'Classic Room',
                    roomSize: '45',
                    roomPrice: '80',
                    roomDescription: 'Lorem Ipsum Dolar Apet Classic Room',
                },
                {
                    roomId: 'super_room',
                    roomName: 'Super Room',
                    roomSize: '65',
                    roomPrice: '120',
                    roomDescription: 'Lorem Ipsum Dolar Apet Super Room',
                },
                {
                    roomId: 'king_room',
                    roomName: 'King Room',
                    roomSize: '90',
                    roomPrice: '150',
                    roomDescription: 'Lorem Ipsum Dolar Apet King Room',
                },
            ],

            activeRoom: {},
        }
    },
    actions: {
        findRoom(roomID) {
            this.roomsInfo.filter((room) => room.id === roomID)
        },
    },
})
