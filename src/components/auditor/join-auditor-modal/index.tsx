import { Modal } from 'components/common/modal'
import { Text } from 'components/common/text';
import { Button } from 'components/common/button';
import { KeyboardEvent, useCallback } from 'react';

type Props = {
  joinCode: string;
  onJoinCodeChange: (e: any) => void;
  isOpen: boolean;
  handleClose: () => void;
  handleJoin: () => void;
}

export const JoinAuditorModal = ({
  joinCode,
  onJoinCodeChange,
  isOpen,
  handleClose,
  handleJoin,
}: Props) => {
  const handleKeyPressed = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleJoin();
    }
  }, [handleJoin])

  return (
    <Modal
      title='수강자 페이지 접속'
      isOpen={isOpen}
      close={handleClose}
      maxWidth='400px'
      width='90%'
      height='225px'
    >
      <div className='joinLecturerModal'>
        <Text>접속 코드</Text>
        <Text size='small'>강사에게 전달받은 접속코드를 입력해주세요</Text>
        <input
          value={joinCode}
          onChange={onJoinCodeChange}
          className='joinLecturerModal-code'
          type='password'
          onKeyPress={handleKeyPressed}
        />

        <div className='joinLecturerModal-buttonWrapper'>
          <Button
            onClick={handleJoin}
          >접속</Button>
        </div>
      </div>
    </Modal>
  )
}