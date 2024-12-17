import React, { useState } from 'react';
import { Image, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Layout, Text, Button, Input, Modal, Card, Icon } from '@ui-kitten/components';

const TaskerRating = ({ navigation }) => {
    const [comment, setComment] = useState('');
    const [visible, setVisible] = useState(false);

    const handleSubmit = () => {
        setVisible(true);
    };
    const closeModal = () => {
        setVisible(false);
        navigation.replace('Profile');
    };

    return (
        <Layout style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: '#ffffff',
                        padding: 20,
                        marginBottom: 10
                    }}
                >
                    <Icon
                        name="arrow-back"
                        style={styles.backandCloseImage}
                        onPress={() => navigation.goBack()}
                    />

                    <Text category="h6" style={styles.headerTitle}>
                        Rating
                    </Text>
                </View>

                <Layout style={{ padding: 20, backgroundColor: '#F7F9FC' }}>
                    <Layout style={styles.cardLayout}>
                        <Image
                            source={{ uri: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' }}
                            style={styles.profileImage}
                        />
                        <Text category="h6">Ashley Hidayat</Text>
                        <Text category="s2" appearance="hint">Share your experience working together!</Text>
                        <Image
                            source={require('../public/images/star-rating-4.5.png')}
                            style={styles.starImage}
                        />
                        <Text category="h5">Awesome!</Text>
                    </Layout>

                    <Layout style={styles.reviewsLayout}>
                        <Text category="h5">Other Reviews</Text>
                        <Text appearance="hint" category="s1">Maximum 3 choices</Text>
                        <Layout style={styles.tagContainer}>
                            <Text
                                style={[styles.tag, styles.tagFriendlyEfficient]}
                                textStyle={{ color: '#6d30ed' }}
                            >
                                Friendly
                            </Text>
                            <Text
                                style={[styles.tag, styles.tagTimelinessProfessionalism]}
                                textStyle={{ color: 'black' }}
                            >
                                Timeliness
                            </Text>
                            <Text
                                style={[styles.tag, styles.tagTimelinessProfessionalism]}
                                textStyle={{ color: 'black' }}
                            >
                                Professionalism
                            </Text>
                            <Text
                                style={[styles.tag, styles.tagFriendlyEfficient]}
                                textStyle={{ color: '#6d30ed' }}
                            >
                                Efficient
                            </Text>
                        </Layout>
                    </Layout>

                    <Layout style={styles.commentsLayout}>
                        <Text category="h5">Comments</Text>
                        <Input
                            placeholder="Write your comments here..."
                            multiline={true}
                            textStyle={styles.inputText}
                            value={comment}
                            onChangeText={setComment}
                            style={styles.input}
                        />
                        <Layout style={styles.commentActions}>
                            <Image
                                source={require('../public/images/comment-img1.png')}
                                style={styles.commentImage}
                            />
                            <Image
                                source={require('../public/images/comment-img2.png')}
                                style={styles.commentImage}
                            />
                            <TouchableOpacity style={styles.addPhotoButton} appearance="outline" status="primary">
                                <Text style={{ color: '#6d30ed' }}>Add Photo</Text>
                            </TouchableOpacity>
                        </Layout>
                    </Layout>
                </Layout>
            </ScrollView>
            <View style={styles.bottomBar}>
                <Button style={styles.submitButton} onPress={handleSubmit}>Submit</Button>
            </View>
            <Modal
                visible={visible}
                backdropStyle={styles.modalBackdrop}
                onBackdropPress={closeModal}
            >
                <Card disabled={true} style={styles.modalCard}>
                    <Image
                        source={require('../public/images/success-icon.png')}
                        style={styles.successImage}
                    />
                    <Text category="h6" style={styles.successText}>
                        Success!
                    </Text>
                    <Text appearance="hint" style={styles.modalHint}>
                        Thank you for your review.
                    </Text>
                    <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                        <Text style={styles.buttonText}>Back to Home</Text>
                    </TouchableOpacity>
                </Card>
            </Modal>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fb',
    },
    centerLayout: {
        alignItems: 'center',
        marginBottom: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 20,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
    },
    backandCloseImage: {
        width: 25,
        height: 25,
        marginRight: 15
    },
    cardLayout: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginBottom: 20,
        overflow: 'visible',
        position: 'relative',
        marginTop: 25,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
        marginTop: -60,
    },
    starImage: {
        width: 120,
        height: 24,
        marginVertical: 10
    },
    reviewsLayout: {
        marginBottom: 20,
        backgroundColor: '#f8f9fb',
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        backgroundColor: '#f8f9fb',
    },
    tag: {
        marginRight: 8,
        marginBottom: 8,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        textAlign: 'center',
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagFriendlyEfficient: {
        backgroundColor: '#f6f1fd',
        color: '#6d30ed',
    },
    tagTimelinessProfessionalism: {
        backgroundColor: 'white',
        color: 'black',
    },
    commentsLayout: {
        marginBottom: 20,
        backgroundColor: 'none',
    },
    input: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#a0a3ac',
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    inputText: {
        minHeight: 100,
    },
    commentActions: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        marginBottom: 40
    },
    commentImage: {
        width: 108,
        height: 108,
        borderRadius: 8,
        marginRight: 8,
    },
    addPhotoButton: {
        width: 108,
        height: 108,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#6200ea',
        backgroundColor: '#fff'
    },
    bottomBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 16,
        paddingVertical: 13,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e4e9f2'
    },
    submitButton: {
        width: '100%',
        borderRadius: 50,
        backgroundColor: '#6d30ed',
        borderColor: 'transparent',
    },
    modalBackdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalCard: {
        alignItems: 'center',
        padding: 5,
        width: '100%',
        borderRadius: 20,
    },
    successImage: {
        width: 100,
        height: 100,
        marginTop: 30,
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    successText: {
        color: '#181c20',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    modalHint: {
        fontSize: 16,
        color: '#989ba6',
        textAlign: 'center',
        marginBottom: 30,
    },
    // modalButton: {
    //     width: '100%',
    //     borderRadius: 25,
    //     backgroundColor: '#6d30ed',
    //     borderColor: 'transparent',
    //     // paddingVertical: 10,
    // },
    modalButton: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#6d30ed',
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default TaskerRating;