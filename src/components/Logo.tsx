import { useMantineColorScheme } from '@mantine/core'
import { FC } from 'react'

interface LogoProps {
  isReverse?: boolean
}

export const Logo: FC<LogoProps> = ({ isReverse }) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = isReverse ? colorScheme !== 'dark' : colorScheme === 'dark'

  const color = dark ? '#fff' : '#1A1928'

  return (
    <svg
      width='140'
      height='40'
      viewBox='0 0 180 49'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M16.0107 21.6458V0H21.4756V21.6458H16.0107Z' fill={color} />
      <path
        d='M25.3129 21.6458V0H29.1291L30.7777 4.42686V21.6458H25.3129ZM40.2421 21.6458L27.6026 5.587L29.1291 0L41.7991 16.0588L40.2421 21.6458ZM40.2421 21.6458L38.8377 17.0968V0H44.3025V21.6458H40.2421Z'
        fill={color}
      />
      <path
        d='M54.7147 21.6458L46.5632 0H52.3944L58.5004 17.4937H55.997L62.1946 0H67.9037L59.6606 21.6458H54.7147Z'
        fill={color}
      />
      <path
        d='M70.1837 21.6458V0H75.6485V21.6458H70.1837ZM74.5189 21.6458V17.0358H86.2425V21.6458H74.5189ZM74.5189 12.8531V8.36523H85.1434V12.8531H74.5189ZM74.5189 4.61004V0H86.0593V4.61004H74.5189Z'
        fill={color}
      />
      <path
        d='M89.3246 21.6458V0H93.1408L94.7894 4.42686V21.6458H89.3246ZM104.254 21.6458L91.6143 5.587L93.1408 0L105.811 16.0588L104.254 21.6458ZM104.254 21.6458L102.849 17.0968V0H108.314V21.6458H104.254Z'
        fill={color}
      />
      <path
        d='M117.414 21.6458V0.15265H122.879V21.6458H117.414ZM110.789 4.70163V0H129.504V4.70163H110.789Z'
        fill={color}
      />
      <path d='M131.989 21.6458V0H137.454V21.6458H131.989Z' fill={color} />
      <path
        d='M147.855 21.6458L139.704 0H145.535L151.641 17.4937H149.137L155.335 0H161.044L152.801 21.6458H147.855Z'
        fill={color}
      />
      <path
        d='M163.324 21.6458V0H168.789V21.6458H163.324ZM167.659 21.6458V17.0358H179.383V21.6458H167.659ZM167.659 12.8531V8.36523H178.284V12.8531H167.659ZM167.659 4.61004V0H179.2V4.61004H167.659Z'
        fill={color}
      />
      <path
        d='M0.0649414 48.3596V26.7138H3.8812L5.52982 31.1406V48.3596H0.0649414ZM14.9941 48.3596L2.35469 32.3008L3.8812 26.7138L16.5512 42.7726L14.9941 48.3596ZM14.9941 48.3596L13.5897 43.8106V26.7138H19.0546V48.3596H14.9941Z'
        fill={color}
      />
      <path
        d='M22.9028 48.3596V26.7138H28.3677V48.3596H22.9028ZM27.2381 48.3596V43.7495H38.9616V48.3596H27.2381ZM27.2381 39.5669V35.079H37.8626V39.5669H27.2381ZM27.2381 31.3238V26.7138H38.7785V31.3238H27.2381Z'
        fill={color}
      />
      <path
        d='M47.3865 48.3596L40.5172 26.7138H45.9211L50.8669 43.3832H48.5161L53.4009 26.7138H57.7667L62.6515 43.3832H60.3312L65.2771 26.7138H70.6504L63.7506 48.3596H59.3543L54.4695 31.7207H56.6676L51.8134 48.3596H47.3865Z'
        fill={color}
      />
      <path
        d='M78.8744 48.6954C77.063 48.6954 75.4856 48.4206 74.1423 47.8711C72.8193 47.3215 71.6083 46.4565 70.5092 45.276L73.9591 41.7956C74.7122 42.5894 75.5161 43.2 76.3709 43.6274C77.2258 44.0345 78.1926 44.238 79.2713 44.238C80.1872 44.238 80.8894 44.0854 81.3779 43.7801C81.8867 43.4544 82.1411 43.0168 82.1411 42.4673C82.1411 41.9584 81.9579 41.5412 81.5916 41.2155C81.2252 40.8695 80.7367 40.5744 80.1261 40.3302C79.5359 40.0656 78.8744 39.8213 78.1417 39.5974C77.4293 39.3532 76.7068 39.0683 75.9741 38.7426C75.2617 38.3966 74.6002 37.9794 73.9896 37.4909C73.3994 37.0024 72.9211 36.3918 72.5547 35.6591C72.1883 34.9264 72.0052 34.0206 72.0052 32.9419C72.0052 31.5579 72.3308 30.3774 72.9821 29.4004C73.6538 28.4235 74.5799 27.6704 75.7604 27.1412C76.9408 26.612 78.3147 26.3474 79.8819 26.3474C81.4491 26.3474 82.8942 26.612 84.2172 27.1412C85.5401 27.6704 86.629 28.4031 87.4839 29.3394L84.0035 32.7892C83.3521 32.1379 82.6907 31.6495 82.019 31.3238C81.3474 30.9982 80.6146 30.8353 79.8208 30.8353C79.0678 30.8353 78.4775 30.9676 78.0501 31.2322C77.6227 31.4968 77.409 31.8733 77.409 32.3618C77.409 32.8503 77.5922 33.2472 77.9585 33.5525C78.3249 33.8578 78.8032 34.1326 79.3934 34.3768C80.004 34.6007 80.6655 34.8348 81.3779 35.079C82.1106 35.3232 82.8331 35.6082 83.5455 35.9338C84.2579 36.2595 84.9092 36.6767 85.4994 37.1856C86.11 37.6944 86.5985 38.3355 86.9649 39.109C87.3312 39.8824 87.5144 40.8186 87.5144 41.9177C87.5144 44.0752 86.7512 45.7442 85.2247 46.9247C83.7185 48.1052 81.6018 48.6954 78.8744 48.6954Z'
        fill={color}
      />
      <rect
        y='0.0203247'
        width='12.7208'
        height='21.6254'
        rx='1'
        fill={color}
      />
      <rect
        x='90.9541'
        y='26.0981'
        width='89.0459'
        height='22.8975'
        rx='1'
        fill={color}
      />
    </svg>
  )
}
