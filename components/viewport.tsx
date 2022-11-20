import {useRef, useEffect, useMemo} from 'react';
import {useViewer} from '../hooks/use-viewer';

type ViewportProps = {};

const Viewport: React.FC<ViewportProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {viewerActions} = useViewer();

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.width = '100%';
      canvasRef.current.style.height = '100%';
      canvasRef.current.style.position = 'absolute';
      canvasRef.current.style.top = '0px';
      canvasRef.current.style.left = '0px';
      viewerActions.initViewer(canvasRef.current);
    }
  }, []);

  return (
    <>
      <canvas id="viewport" ref={canvasRef}></canvas>
    </>
  );
};

export default Viewport;
