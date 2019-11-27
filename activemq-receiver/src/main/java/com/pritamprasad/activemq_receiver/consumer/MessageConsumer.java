package com.pritamprasad.activemq_receiver.consumer;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
@EnableJms
public class MessageConsumer {
    private final Logger logger = LoggerFactory.getLogger(MessageConsumer.class);
    @JmsListener(destination = "test-queue")
    public void listener(String message) throws InterruptedException {
        Thread.sleep(100);
        logger.info("Message received {} ", message);
    }
}