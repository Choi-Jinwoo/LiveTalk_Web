import { InquirySocketSingleton } from 'socket/inquiry.socket';
import { InquiryEvents } from './inquiry.event';

class InquiryEmitter {

  joinLecturer(adminCode: string) {
    InquirySocketSingleton.instance.socket
      .emit(InquiryEvents.JOIN_LECTURER_LECTURE, {
        adminCode,
      })
  }
}

export const inquiryEmitter = new InquiryEmitter();