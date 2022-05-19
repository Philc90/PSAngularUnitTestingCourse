import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { MessageService } from "./message.service";

describe('MessageService', () => {
  let service: MessageService

  beforeEach(() => {
    service = new MessageService();
  })

  it('should have no msgs to start', () => {
    service = new MessageService();
    
    expect(service.messages.length).toBe(0)
  })

  it('should add a message when add is called', () => {
    // arrange
    service = new MessageService();

    // act
    service.add('message1');

    // assert
    expect(service.messages.length).toBe(1)
  })

  it('should remove all msgs when clear is called', () => {
    // arrange
    service = new MessageService();
    service.add('message1');

    // act
    service.clear();

    // assert
    expect(service.messages.length).toBe(0)
  })
})