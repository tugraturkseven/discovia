import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'

const About = () => {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, we share information about our application.
            </Text>
            <Text variant='labelLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis eos id unde sed dolore ad illum est, quis ratione aut quasi ea accusamus quod optio nam exercitationem corporis nostrum.
                Corrupti quasi dolorum vero facilis laborum itaque! Rem dolorem mollitia ipsum ratione iusto, delectus provident nulla dolores esse aliquam adipisci ut fugiat assumenda, porro consequatur, quasi atque obcaecati ullam perspiciatis.
                Dolorum, architecto, amet possimus veniam repudiandae deleniti soluta impedit perspiciatis odio mollitia sit ipsum iusto expedita perferendis ipsam repellat repellendus eveniet totam minus aperiam cumque ab. Placeat recusandae quasi laudantium!
                Similique minima, quisquam omnis ipsa ipsum ex tempora voluptatem, hic amet, ea cupiditate ut voluptate voluptatum. Alias earum repellendus eaque eveniet nemo distinctio ipsa, totam obcaecati quam enim debitis veniam.
                Cum beatae omnis debitis dicta earum, maxime quia adipisci ex repellat illo ipsam doloribus ratione labore sint facilis. Repellendus laborum facere, magni quia consequatur voluptatibus voluptate cum laboriosam! Dolor, deserunt!
                Quisquam ab mollitia voluptate atque totam sint, est, corporis et quia, quidem tempora! Facilis, perspiciatis saepe! Nam perferendis eos adipisci, reprehenderit repellat, a quam quia, facilis corrupti commodi natus doloribus!
                Laborum, exercitationem inventore ullam ipsa, eaque cupiditate doloremque quidem dolores assumenda expedita illum est tempore quam voluptatibus odit voluptatum nulla delectus beatae? Eaque voluptas odio eius at adipisci quas. Inventore.
                Ut nihil cupiditate quasi quisquam deleniti perspiciatis, at explicabo alias ratione laborum optio nemo veniam repellat natus ipsa dicta totam atque odio libero, hic exercitationem eos minima illum. Quod, nobis!
                Magnam vel quod excepturi aut nostrum a eligendi facilis veniam ratione. Ipsum quam harum saepe repellendus impedit autem architecto, dolorem magni reprehenderit iusto? Corporis, quibusdam quaerat officia aliquid modi maxime?
                Necessitatibus dolore, laboriosam neque omnis, accusamus doloribus perspiciatis provident harum consequuntur dolorem aut! Dolorem, praesentium. Sapiente omnis, minima dignissimos suscipit consequuntur iusto quae debitis, porro repellendus dolores optio mollitia enim.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})


export default About