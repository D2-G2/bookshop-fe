import styled from 'styled-components';
import useToastStore from '@/store/toastStore';
import Toast from '@/components/common/toast/Toast';

function ToastContainer() {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <ToastContainerStyle>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </ToastContainerStyle>
  );
}

const ToastContainerStyle = styled.div`
  position: fixed;
  top: 32px;
  right: 24px;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default ToastContainer;
