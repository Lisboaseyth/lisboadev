import { Box, Divider, Flex, Image, Stack, Tag, Text } from "@chakra-ui/react"
import { Jobs } from "../../types"

export const CardJob = ({ name, position, data, description, techs, image }: Jobs) => {
  return (
    <Flex justifyContent={'flex-start'} w={'100%'} gap={3}>
      <Stack alignItems={'center'}>
        <Box w={'80px'} h={'80px'}>
          <Image borderRadius={5} src={image} />
        </Box>
        <Divider orientation='vertical' />
      </Stack>
      <Box>
        <Text color={'white'}>
          {name}
        </Text>
        <Text color={'grey'}>
          {position}
        </Text>
        <Text color={'white'}>
          {data}
        </Text>
        <Text color={'grey'}>
          {description}
        </Text>
        <Text color={'white'} mt={10}>
          Competências
        </Text>
        <Flex gap={2} flexDirection={'row'} w={'100%'} flexWrap={'wrap'} mb={4}>
          {
            techs.map((tech, index) => (
              <Tag color={'white'} key={index} fontWeight={300} bg={'#00A2FF'}>{tech}</Tag>
            ))
          }
        </Flex>
      </Box>
    </Flex>
  )
}
